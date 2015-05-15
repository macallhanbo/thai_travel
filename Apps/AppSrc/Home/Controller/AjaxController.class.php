<?php

namespace Home\Controller;

use Home\Logic\UserLogic;

class AjaxController extends HomeBaseController {

    /*
     * 注册邮箱验证
     * created_at:2015-5-15 13:08
     * updated_at:2015-5-15 17:35
     */
    public function registerEmailValidationAction() {
        $email = I('post.email');
        $data = array();
        $data['email_resp'] = '';
        $data['email_registerable'] = YES;
        
        //邮箱格式不正确
        $is_email = eregi(EMAIL_VALIDATION, $email);
        if(!$is_email){
            $data['email_resp'] = C('email_invalid');
            $data['email_registerable'] = NO;
            $this->json_success_response($data);
            return;
        }
        
        //邮箱已经被注册
        $user = new UserLogic();
        $is_registered = $user->validate_user_email($email);
        
        if($is_registered){
            $data['email_resp'] = C('email_registered');
            $data['email_registerable'] = NO;
            $this->json_success_response($data);
            return;
        }
        //邮箱可以注册
        $this->json_success_response($data);
    }
}

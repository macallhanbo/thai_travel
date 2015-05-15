<?php
namespace Home\Logic;

use Home\Service\UserService;

class UserLogic extends BaseLogic{
    
    public function validate_user_email($email = ''){
        $user = new UserService();
        $data = $user->find_user_email($email);
        
        return count($data) != 0;
    }
}


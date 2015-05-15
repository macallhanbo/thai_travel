<?php
namespace Home\Model;

class UserModel extends BaseModel{
    
    public function __construct() {
        parent::__construct();
    }
    
    public function get_user_email($email = ''){
        $user = M('User');
        $condition['user_email'] = $email;
        
        return $user->field('user_id')->where($condition)->limit(1)->select();
    }
}


<?php
namespace Home\Service;

class UserService extends BaseService{
    
    public function find_user_email($email = ''){
        $user = D('User');
        return $user->get_user_email($email);
    }
}


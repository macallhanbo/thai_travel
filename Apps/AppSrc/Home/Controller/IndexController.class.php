<?php

namespace Home\Controller;

class IndexController extends HomeBaseController {

    public function indexAction() {
//        echo 'this is welcome page!';
        $this->assign('title_name', '泰游记，一个专为泰国旅游服务的网站');
        $this->display();
    }

}

<?php

namespace Home\Controller;

class IndexController extends HomeBaseController {

    /*
     * 首页
     * created_at:2015-5-7 16:42
     * updated_at:2015-5-12 17:35
     */
    public function indexAction() {
        $this->assign('title_name', '泰游记，一个专为泰国旅游服务的网站');
        $this->display();
    }

    /*
     * 注册新用户
     * created_at:2015-5-12 17:35
     * updated_at:2015-5-12 17:35
     */
    public function registAction() {
        layout(false); // 临时关闭当前模板的布局功能
        $this->assign('title_name', '泰游记-新用户注册');
        $this->display();
    }

}

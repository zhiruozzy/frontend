<template>
    <el-menu default-active="dashboard" @select="handleMenuSelect" :collapse="isCollapsed">
        <el-menu-item index="dashboard">控制面板</el-menu-item>
        <el-menu-item index="control">中控</el-menu-item>
        <el-menu-item index="room-service">房间服务</el-menu-item>
    </el-menu>
</template>

<script>
export default {
    data() {
        return {
            isCollapsed: false,
        };
    },
    methods: {
        handleMenuSelect(index) {
            let page = '';
            switch (index) {
                case 'dashboard':
                    page = '/dashboard';
                    break;
                case 'control':
                    page = '/control';
                    break;
                case 'room-service':
                    page = '/room-service';
                    break;
                default:
                    page = '/';
            }
            // 判断当前页面是否已经是目标页面
            if (this.$route.path !== page) {
                this.$router.push(page); // 如果不是目标页面，则进行路由导航
            }
        }
    },
};
</script>

var posts=["2023/05/13/Linux驱动基础知识一/","2023/05/24/一段Python代码破解WiFi/","2023/05/18/初识WEB前端(基础知识) 一/","2023/05/19/初识WEB前端(HTML表单) 三/","2023/05/18/面试题/","2023/05/18/初识WEB前端(初识HTML) 二/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};
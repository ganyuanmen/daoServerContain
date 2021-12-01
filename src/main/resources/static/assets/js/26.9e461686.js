(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{413:function(a,t,s){"use strict";s.r(t);var r=s(55),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"网站部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网站部署"}},[a._v("#")]),a._v(" 网站部署")]),a._v(" "),s("h2",{attrs:{id:"一、docker-部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、docker-部署"}},[a._v("#")]),a._v(" 一、docker 部署")]),a._v(" "),s("p",[a._v("网站采用两个docker 容器部署， 一个是mysql 容器， 另一个是java 容器。mysql容器是用于主链数据的缓存，java 容器提供网站支侍。")]),a._v(" "),s("h3",{attrs:{id:"下载docker镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载docker镜像"}},[a._v("#")]),a._v(" 下载docker镜像")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v(" docker pull fhtcgym123"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("dao_mysql\n docker pull fhtcgym123"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("dao_server\n\n")])])]),s("h3",{attrs:{id:"安装部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装部署"}},[a._v("#")]),a._v(" 安装部署")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("docker run "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("itd "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("name dao_mysql  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("v "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("lib"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("mysql "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("e "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("MYSQL_ROOT_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("Dao"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v(".123")]),a._v(" dao_mysql\ndocker run "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("itd "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("p "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8086")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8088")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("name daoserver "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("link dao_mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("dao_mysql  dao_server\n\n")])])]),s("ul",[s("li",[a._v("mysql 数据库需要挂载在宿主机上，可以永久保存缓存数据。 -v /mysql/data:/var/lib/mysql 表示数据挂载在宿主机的 /mysql/data 目录下，可以根据实际更改挂载目录。")]),a._v(" "),s("li",[a._v("-e MYSQL_ROOT_PASSWORD=Dao..123 表示mysql root用户的密码是 Dao..123，不能更改，否则网站将连接不上数据库。这里的mysql 是运行在容器中， 不提供对外接口，只有用 --link参数 运行的容器才能访问，因此不存在数据安全问题。")]),a._v(" "),s("li",[a._v("--link dao_mysql:dao_mysql 是必须的， 表示网站的数据由dao_mysql容器提供。")]),a._v(" "),s("li",[a._v("-p 8086:8088 表示容器的接口映射到宿主机的端口上。 容器的8088端口提供网站的访问， 宿主机可以根据实际映射该端口。")])]),a._v(" "),s("h3",{attrs:{id:"mysql-dockerfile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql-dockerfile"}},[a._v("#")]),a._v(" mysql Dockerfile")]),a._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[a._v('\nFROM docker.io/mysql\n\n#指明该镜像的作者和电子邮箱\nMAINTAINER gym "393909065@qq.com"\n \nEXPOSE 3306\n\n#定义会被容器自动执行的目录\nENV AUTO_RUN_DIR /docker-entrypoint-initdb.d\n\n#定义初始化sql文件\nENV INIT_SQL admin.sql\n\n#把要执行的sql文件放到/docker-entrypoint-initdb.d/目录下，容器会自动执行这个sql\nCOPY admin.sql ./$INIT_SQL $AUTO_RUN_DIR/\n\n#给执行文件增加可执行权限\nRUN chmod a+x $AUTO_RUN_DIR/$INIT_SQL\n\n')])])]),s("h3",{attrs:{id:"java-网站-dockerfile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-网站-dockerfile"}},[a._v("#")]),a._v(" java 网站 Dockerfile")]),a._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[a._v('\nFROM docker.io/java:8\n\n#指明该镜像的作者和电子邮箱\nMAINTAINER gym "393909065@qq.com"\n \n#在构建镜像时，指定镜像的工作目录，之后的命令都是基于此工作目录，如果不存在，则会创建目录\nWORKDIR /home\n \nCOPY daoserver-0.1.jar  /home\n\nEXPOSE 8088\n\nRUN chmod a+x /home/daoserver-0.1.jar\n\nENTRYPOINT ["java", "-jar","/home/daoserver-0.1.jar"]\n\n')])])]),s("h2",{attrs:{id:"二、拆分部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、拆分部署"}},[a._v("#")]),a._v(" 二、拆分部署")]),a._v(" "),s("h3",{attrs:{id:"_1、mysql-数据库的安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、mysql-数据库的安装"}},[a._v("#")]),a._v(" 1、mysql 数据库的安装")]),a._v(" "),s("p",[a._v("下载 mysql 脚本文件，登录后，运行 source /admin.sql")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("下载提示")]),a._v(" "),s("p",[a._v("从github下载dao 网站。执行其中的admin.sql\n"),s("a",{attrs:{href:"https://github.com/ganyuanmen/daoDapp0.5",target:"_blank",rel:"noopener noreferrer"}},[a._v("dao网站GitHup"),s("OutboundLink")],1),a._v(".")])]),a._v(" "),s("h3",{attrs:{id:"_2、dao的后台服务部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、dao的后台服务部署"}},[a._v("#")]),a._v(" 2、dao的后台服务部署")]),a._v(" "),s("p",[a._v("从git hub 下载 dao 服务（springboot）项目，在配置文件中更改mysql的登录地址、帐号和密码。编译成jar 包发布到linux 服务器， 或编译成war包发布到 tomcat下。")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("下载提示")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/ganyuanmen/daoserver",target:"_blank",rel:"noopener noreferrer"}},[a._v("dao后台服务GitHup"),s("OutboundLink")],1),a._v(".")])]),a._v(" "),s("h3",{attrs:{id:"_3、dao的事件监听服务部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、dao的事件监听服务部署"}},[a._v("#")]),a._v(" 3、dao的事件监听服务部署")]),a._v(" "),s("p",[a._v("从git hub 下载 dao事件服务(nodejs)项目，在配置文件sn.txt 中更改mysql的登录地址、帐号和密码。包发布到linux 服务器。")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("下载提示")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/ganyuanmen/daoNodeService",target:"_blank",rel:"noopener noreferrer"}},[a._v("dao事件监听服务GitHup"),s("OutboundLink")],1),a._v(".")])]),a._v(" "),s("h3",{attrs:{id:"_4、dao网站部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、dao网站部署"}},[a._v("#")]),a._v(" 4、dao网站部署")]),a._v(" "),s("p",[a._v("从git hub 下载 dao网站项目(webpack), 打包后，发布到nginx 或httpd 下。")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("下载提示")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/ganyuanmen/daoDapp0.5",target:"_blank",rel:"noopener noreferrer"}},[a._v("dao网站GitHup"),s("OutboundLink")],1),a._v(".")])])])}),[],!1,null,null,null);t.default=e.exports}}]);
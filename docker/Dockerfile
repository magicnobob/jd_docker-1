FROM node:lts-alpine3.12
LABEL AUTHOR="zhaozhanzhan" \
      VERSION=1.0.1

ARG KEY="-----BEGIN OPENSSH PRIVATE KEY-----\nb3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAABFwAAAAdzc2gtcn\nNhAAAAAwEAAQAAAQEAvRQk2oQqLB01iVnJKrnI3tTfJyEHzc2ULVor4vBrKKWOum4dbTeT\ndNWL5aS+CJso7scJT3BRq5fYVZcz5ra0MLMdQyFL1DdwurmzkhPYbwcNrJrB8abEPJ8ltS\nMoa0X9ecmSepaQFedZOZ2YeT/6AAXY+cc6xcwyuRVQ2ZJ3YIMBrRuVkF6nYwLyBLFegzhu\nJJeU5o53kfpbTCirwK0h9ZsYwbNbXYbWuJHmtl5tEBf2Hz+5eCkigXRq8EhRZlSnXfhPr2\n32VCb1A/gav2/YEaMPSibuBCzqVMVruP5D625XkxMdBdLqLBGWt7bCas7/zH2bf+q3zac4\nLcIFhkC6XwAAA9BjE3IGYxNyBgAAAAdzc2gtcnNhAAABAQC9FCTahCosHTWJWckqucje1N\n8nIQfNzZQtWivi8GsopY66bh1tN5N01YvlpL4ImyjuxwlPcFGrl9hVlzPmtrQwsx1DIUvU\nN3C6ubOSE9hvBw2smsHxpsQ8nyW1IyhrRf15yZJ6lpAV51k5nZh5P/oABdj5xzrFzDK5FV\nDZkndggwGtG5WQXqdjAvIEsV6DOG4kl5TmjneR+ltMKKvArSH1mxjBs1tdhta4kea2Xm0Q\nF/YfP7l4KSKBdGrwSFFmVKdd+E+vbfZUJvUD+Bq/b9gRow9KJu4ELOpUxWu4/kPrbleTEx\n0F0uosEZa3tsJqzv/MfZt/6rfNpzgtwgWGQLpfAAAAAwEAAQAAAQEAnMKZt22CBWcGHuUI\nytqTNmPoy2kwLim2I0+yOQm43k88oUZwMT+1ilUOEoveXgY+DpGIH4twusI+wt+EUVDC3e\nlyZlixpLV+SeFyhrbbZ1nCtYrtJutroRMVUTNf7GhvucwsHGS9+tr+96y4YDZxkBlJBfVu\nvdUJbLfGe0xamvE114QaZdbmKmtkHaMQJOUC6EFJI4JmSNLJTxNAXKIi3TUrS7HnsO3Xfv\nhDHElzSEewIC1smwLahS6zi2uwP1ih4fGpJJbU6FF/jMvHf/yByHDtdcuacuTcU798qT0q\nAaYlgMd9zrLC1OHMgSDcoz9/NQTi2AXGAdo4N+mnxPTHcQAAAIB5XCz1vYVwJ8bKqBelf1\nw7OlN0QDM4AUdHdzTB/mVrpMmAnCKV20fyA441NzQZe/52fMASUgNT1dQbIWCtDU2v1cP6\ncG8uyhJOK+AaFeDJ6NIk//d7o73HNxR+gCCGacleuZSEU6075Or2HVGHWweRYF9hbmDzZb\nCLw6NsYaP2uAAAAIEA3t1BpGHHek4rXNjl6d2pI9Pyp/PCYM43344J+f6Ndg3kX+y03Mgu\n06o33etzyNuDTslyZzcYUQqPMBuycsEb+o5CZPtNh+1klAVE3aDeHZE5N5HrJW3fkD4EZw\nmOUWnRj1RT2TsLwixB21EHVm7fh8Kys1d2ULw54LVmtv4+O3cAAACBANkw7XZaZ/xObHC9\n1PlT6vyWg9qHAmnjixDhqmXnS5Iu8TaKXhbXZFg8gvLgduGxH/sGwSEB5D6sImyY+DW/OF\nbmIVC4hwDUbCsTMsmTTTgyESwmuQ++JCh6f2Ams1vDKbi+nOVyqRvCrAHtlpaqSfv8hkjK\npBBqa/rO5yyYmeJZAAAAFHJvb3RAbmFzLmV2aW5lLnByZXNzAQIDBAUG\n-----END OPENSSH PRIVATE KEY-----"
# FROM # 基础镜像 比如node
# MAINTAINER # 镜像是谁写的 姓名+邮箱(MAINTAINER已经被废弃)
# LABEL # 给镜像添加一些元数据
# ARG # 构建参数,与 ENV 作用一至.不过作用域不一样。ARG设置的环境变量仅对Dockerfile内有效,也就是说只有docker build的过程中有效，构建好的镜像内不存在此环境变量
# RUN # 镜像构建时需要运行的命令
# ADD # 添加，比如添加一个tomcat压缩包
# WORKDIR # 镜像的工作目录
# VOLUME # 挂载的目录
# EXPOSE # 指定暴露端口，跟-p一个道理
# RUN # 最终要运行的
# CMD # 指定这个容器启动的时候要运行的命令，只有最后一个会生效，而且可被替代
# ENTRYPOINT # 指定这个容器启动的时候要运行的命令，可以追加命令
# ONBUILD # 当构建一个被继承Dockerfile 这个时候运行ONBUILD指定，触发指令
# COPY # 将文件拷贝到镜像中
# ENV # 构建的时候设置环境变量
# ====================================================================
# Add proxy, using --build-arg "HTTP_PROXY=http://192.168.1.100:7890"

ENV HTTP_PROXY ${HTTP_PROXY}
ENV HTTPS_PROXY ${HTTP_PROXY}
ENV http_proxy ${HTTP_PROXY}
ENV https_proxy ${HTTP_PROXY}
# 设置环境变量，容器内部使用
ENV DEFAULT_LIST_FILE=crontab_list.sh \
    CUSTOM_LIST_MERGE_TYPE=append \
    COOKIES_LIST=/scripts/logs/cookies.list \
    REPO_URL=git@gitee.com:zhaozhanzhan520/jd_docker.git \
    REPO_BRANCH=master

# set -e ： -e这个参数的含义是,当命令发生错误的时候,停止脚本的执行
# set -x ： -x参数的作用是把将要运行的命令用一个+标记之后显示出来
# echo -e ：激活转义字符
# echo -n ：不换行输出
# apk : 软件包管理工具
# mkdir -p ：递归创建目录，即使上级目录不存在，会按目录层级自动创建目录
# git clone -b : 克隆指定的分支 git clone -b 分支名 仓库地址
RUN set -ex \
    && echo $http_proxy \
    && echo -e "https://mirrors.ustc.edu.cn/alpine/latest-stable/main\nhttps://mirrors.ustc.edu.cn/alpine/latest-stable/community" > /etc/apk/repositories \
    && apk update \
    && apk upgrade \
    && apk add --no-cache bash tzdata git moreutils curl jq openssh-client \
    && apk add --no-cache make gcc g++ python3-dev pkgconfig pixman-dev cairo-dev pango-dev libjpeg-turbo-dev giflib-dev \
    && rm -rf /var/cache/apk/* \
    && ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone \
    && mkdir -p /root/.ssh \
    && echo -e $KEY > /root/.ssh/id_rsa \
    && chmod 600 /root/.ssh/id_rsa \
    && ssh-keyscan gitee.com > /root/.ssh/known_hosts \
    && git clone -b $REPO_BRANCH $REPO_URL /scripts \
    && cd /scripts \
    && mkdir logs \
    && npm config set registry https://registry.npm.taobao.org \
    && npm install \
    && cp /scripts/docker/docker_entrypoint.sh /usr/local/bin \
    && chmod +x /usr/local/bin/docker_entrypoint.sh

#Add pip install mirror:

RUN echo "[global] \
    index-url = http://pypi.tuna.tsinghua/simple \
    trusted-host = pypi.tuna.tsinghua \
    timeout = 120 \
    " > /etc/pip.conf
# ====================================================================
# RUN pip install --upgrade pip 
# ====================================================================
ENV HTTP_PROXY ""
ENV HTTPS_PROXY ""
ENV http_proxy ""
ENV https_proxy ""
# ====================================================================

WORKDIR /scripts

ENTRYPOINT ["docker_entrypoint.sh"]

# alpine版本内嵌的是BusyBox，使用alpine的crontab实际就是使用BusyBox的crond服务
CMD [ "crond" ]
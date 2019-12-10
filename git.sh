unset msg

read -p "请输入commit提交的描述: " msg

git init
git add -A
git commit -m $msg
git remote add origin https://github.com/singgl/vue-admin.git
git push -u origin master
git status
# sample-express-app

## 環境構築

Node.jsインストール
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
source ~/.bashrc
nvm install stable
npm install sequelize-cli -g
```

DB初期設定
```
# rootユーザーパスワード変更
sudo grep 'temporary password' /var/log/mysqld.log
mysql -u root -p
ALTER USER 'root'@'localhost' IDENTIFIED BY '^a8aSCpGp8a8';

# ユーザー作成
CREATE USER node_app_user IDENTIFIED WITH mysql_native_password BY '^a8aSCpGp8a8';

# DB作成
CREATE DATABASE node_app_db;
GRANT ALL ON node_app_db.* TO 'node_app_user'@'%';

# テスト用DB作成
CREATE DATABASE node_app_db_test;
GRANT ALL ON node_app_db_test.* TO 'node_app_user'@'%';
```


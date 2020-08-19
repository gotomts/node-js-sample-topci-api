#!/bin/bash -eu

echo -------------------------------------------------
echo
echo                    MariaDB削除
echo
echo -------------------------------------------------

yum remove mariadb-libs -y
rm -rf /var/lib/mysql

echo -------------------------------------------------
echo
echo                    MySQLインストール
echo
echo -------------------------------------------------

yum localinstall -y https://dev.mysql.com/get/mysql80-community-release-el7-2.noarch.rpm

yum install -y mysql-community-server

echo -------------------------------------------------
echo
echo                    MySQLインストール確認
echo
echo -------------------------------------------------
mysqld --version

echo -------------------------------------------------
echo
echo                    MySQL 設定
echo
echo -------------------------------------------------
cp /etc/my.cnf /etc/my.cnf.org
echo 'default_authentication_plugin= mysql_native_password' >> /etc/my.cnf


echo -------------------------------------------------
echo
echo                    MySQL 起動
echo
echo -------------------------------------------------
systemctl start mysqld.service
systemctl enable mysqld.service

# 手動で下記のコマンドを入力
# sudo grep 'temporary password' /var/log/mysqld.log
# mysql -u root -p
# temporary passwordを入力
# ALTER USER 'root'@'localhost' IDENTIFIED BY '^a8aSCpGp8a8';
# CREATE USER node_app_user IDENTIFIED WITH mysql_native_password BY '^a8aSCpGp8a8';
# CREATE DATABASE node_app_db;
# GRANT ALL ON node_app_db.* TO 'node_app_user'@'%';

# CREATE DATABASE node_app_db_test;
# GRANT ALL ON node_app_db_test.* TO 'node_app_user'@'%';
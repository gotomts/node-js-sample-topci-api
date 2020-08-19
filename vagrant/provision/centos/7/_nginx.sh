#!/bin/bash -eu

USER='vagrant'

echo -------------------------------------------------
echo
echo         nginx
echo
echo -------------------------------------------------
yum -y install epel-release
yum -y install https://rpms.remirepo.net/enterprise/remi-release-7.rpm
yum -y install nginx

mv /etc/nginx/nginx.conf /etc/nginx/nginx.conf.org
cp /vagrant/config/etc/nginx/nginx.conf /etc/nginx/nginx.conf

mkdir -p /var/www/
ln -sf /home/vagrant/html /var/www/html
chown -R ${USER}:${USER} /var/www/html
chmod -R 0777 /home/vagrant/html

systemctl start nginx

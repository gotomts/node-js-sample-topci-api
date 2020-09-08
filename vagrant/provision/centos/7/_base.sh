#!/bin/bash -eu

echo -------------------------------------------------
echo
echo                    OS更新等
echo
echo -------------------------------------------------

# dns設定追加
echo -e 'DNS1=8.8.8.8' >> /etc/sysconfig/network-scripts/ifcfg-eth0
echo -e 'nameserver 8.8.8.8' >> /etc/resolv.conf
echo exclude=centos* >> /etc/yum.conf
echo exclude=kernel* >> /etc/yum.conf
yum -y update
yum -y groupinstall "Base" "Development tools"

echo -------------------------------------------------
echo
echo                    ユーティリティー
echo
echo -------------------------------------------------

#dnf -y install epel-release tree pv dstat zsh man-pages-ja
yum -y install pv dstat zsh

echo -------------------------------------------------
echo
echo                    タイムゾーン設定
echo
echo -------------------------------------------------

timedatectl set-timezone Asia/Tokyo

echo -------------------------------------------------
echo
echo                    言語、キーボード設定
echo
echo -------------------------------------------------

yum install -y langpacks-ja
yum reinstall -y glibc glibc-common
localectl set-locale LANG=ja_JP.utf8
localectl set-keymap jp106

echo -------------------------------------------------
echo
echo                    SELinux 無効化
echo
echo -------------------------------------------------

setenforce 0
sed -i 's/SELINUX=enforcing/SELINUX=disabled/' /etc/selinux/config

echo -------------------------------------------------
echo
echo                    Firewalld 無効化
echo
echo -------------------------------------------------

systemctl stop firewalld
systemctl disable firewalld

echo -------------------------------------------------
echo
echo                    ssh 設定
echo
echo -------------------------------------------------

cp /etc/ssh/sshd_config /etc/ssh/sshd_config.org
sed -i 's/^PasswordAuthentication.no/#PasswordAuthentication no/' /etc/ssh/sshd_config
sed -i 's/^#PasswordAuthentication yes/PasswordAuthentication yes/' /etc/ssh/sshd_config
sed -i 's/^#PermitRootLogin yes/PermitRootLogin yes/' /etc/ssh/sshd_config
systemctl restart sshd

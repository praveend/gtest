#!/bin/bash

#Install meteor if its not installed
hash meteor 2>/dev/null || curl https://install.meteor.com | /bin/sh

#Add ~/.meteor to the path to workaround non-sudo installation issue
hash meteor 2>/dev/null || PATH=$PATH:$HOME/.meteor

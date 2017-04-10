#!/bin/bash
# Copyright (c) 2012-2017 Red Hat, Inc
# All rights reserved. This program and the accompanying materials
# are made available under the terms of the Eclipse Public License v1.0
# which accompanies this distribution, and is available at
# http://www.eclipse.org/legal/epl-v10.html
#
# Contributors:
#   Marian Labuda - Initial Implementation

export CLI_IMAGE="eclipse/che-cli:"$CLI_IMAGE_TAG
source $BATS_BASE_DIR/scripts/base/startup_funcs.sh
export SCRIPTS_DIR=$BATS_BASE_DIR/scripts/base
export TESTS_DIR=$BATS_BASE_DIR/tests
export TESTRUN_DIR=$TESTS_DIR/testrun
if [ -d $TESTRUN_DIR ]; then
 rm -rf $TESTRUN_DIR
fi
mkdir $TESTRUN_DIR -p

kill_running_named_container() {
  if [ $(docker ps --format '{{.Names}}' | grep $1 | wc -l) -eq 1 ]; then
    echo "Stopping named container $1"
    docker kill $1 1>/dev/null
  fi
}

remove_named_container() {
  if [ $(docker ps -a --format '{{.Names}}' | grep $1 | wc -l) -eq 1 ]; then
    echo "Removing named container $1"
    docker rm $1 1>/dev/null
  fi
}

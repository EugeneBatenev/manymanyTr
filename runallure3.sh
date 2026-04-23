#!/bin/bash
TIME_STAMP=$(date +%Y%m%d-%H%M)

#connection settings
export ALLURE_TOKEN=$(security find-generic-password -a "$USER" -s "TESTING_ALLURE_TOKEN" -w)
export ALLURE_ENDPOINT=$(security find-generic-password -a "$USER" -s "TESTING_ALLURE_ENDPOINT" -w)

export ALLURE_PROJECT_ID=14832
export ALLURE_LAUNCH_NAME="$(date "+%Y-%m-%d %H%M%S") local launch"
export ALLURE_RESULTS=allure-results


# launch's configuration

export COMMAND_USED=run

export ALLURE_LAUNCH_TAGS="pytest, allure3, ${COMMAND_USED}"

rm -rf ${ALLURE_RESULTS}
rm history.jsonl

sleep 2

START=$(date +%s)
# pnpm allure ${COMMAND_USED} --config=./allurerc.mjs -- pytest tests --alluredir=${ALLURE_RESULTS}
# pnpm allure ${COMMAND_USED} --config=./qg.mjs -- pytest tests/poco --alluredir=${ALLURE_RESULTS}
pnpm allure ${COMMAND_USED} --config=./envs.mjs -- pytest tests/poco --alluredir=${ALLURE_RESULTS}
END=$(date +%s)
DURATION=$((END - START))
echo "Running time: $DURATION seconds"
#!/bin/sh

set -euo pipefail

npm run test:smoke | tee test_results.txt

test_exit_code=$?

echo "Smoke test exit code was ${test_exit_code}"

if [[ $test_exit_code -eq 0 ]]; then
  mkdir -p /docker-output
  tar -zcvf /docker-output/test_results.tar.gz test_results.txt
fi

exit $test_exit_code

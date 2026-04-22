only applies to tests/poco

TESTS_SUCCESS	behaviour
always	all tests are passing
never	all tests are  (FAILED)
broken	fixture throws exception (BROKEN)
random  or not set – 10-20% probability of failure in asserts

export TESTS_SUCCESS=random; ./runallure3.sh
export TESTS_SUCCESS=always; ./runallure3.sh
export TESTS_SUCCESS=random; ./runtests.sh
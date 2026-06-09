import allure
import pytest


@pytest.fixture(autouse=True)
def _layer():
    allure.dynamic.label("layer", "web")

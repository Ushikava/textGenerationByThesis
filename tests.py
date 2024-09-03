from selenium import webdriver
from selenium.webdriver.common.by import By
import selenium.common.exceptions as ex
import time
import re


num_of_posts: int = 200


def get_num_posts():
    return num_of_posts


def set_num_posts(num):
    global num_of_posts
    num_of_posts = num
    return 0


def check_link(url):
    pattern = r"^https://t\.me/[a-zA-Z0-9]+$"
    if re.match(pattern, url):
        return True
    else:
        return False


def get_texts_from_chat(link):
    if not check_link(link):
        return "Link incorrect"

    finded_texts = []

    firefox_options = webdriver.FirefoxOptions()
    firefox_options.add_argument("--headless")

    driver = webdriver.Firefox(options=firefox_options)
    driver.get(link)

    try:
        link_btn = driver.find_element(By.XPATH, '//a[contains(@class, "tgme_page_context_link")]')
    except ex.NoSuchElementException:
        driver.close()
        print("Элемент не найден!")
        return "Error"
    except ex.WebDriverException:
        driver.close()
        print("Ошибка веб-драйвера!")
        return "Error"
    except Exception as e:
        driver.close()
        print("Неизвестная ошибка: ", e)
        return "Error"

    link_btn.click()
    time.sleep(2)

    while len(finded_texts) < num_of_posts:
        finded_texts.clear()
        driver.execute_script(f"window.scrollTo(0, 1000)")
        post_texts = driver.find_elements(By.CLASS_NAME, 'tgme_widget_message_text')
        for element in post_texts:
            # if "#промо" not in element.text and element.text not in finded_texts:
            if element.text not in finded_texts:
                finded_texts.append("<s>" + element.text + "</s>")

    driver.close()

    with open('texts.txt', "w", encoding="utf-8") as f:
        for text in finded_texts:
            f.write(text + '\n')

    return "Done"


#if __name__ == "__main__":
#    get_texts_from_chat("https://t.me/ru2ch")

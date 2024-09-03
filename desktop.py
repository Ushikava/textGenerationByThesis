import eel
import generate_answer
import tests

eel.init("web")

max_length: int = 500
repetition_penalty: float = 5.0
top_k: int = 10
top_p: float = 0.95
temperature: float = 1


@eel.expose
def parse_from_link(link):
    result = tests.get_texts_from_chat(link)
    return result


@eel.expose
def get_answer(msg):
    answer = generate_answer.generate_simple_answer(msg, max_length, repetition_penalty, top_k, top_p, temperature)
    return answer


@eel.expose
def get_num_posts():
    max_posts = tests.get_num_posts()
    return max_posts


@eel.expose
def set_num_posts(nums):
    tests.set_num_posts(nums)
    pass


# max_length


@eel.expose
def get_max_length():
    return max_length


@eel.expose
def set_max_length(length):
    global max_length
    max_length = length
    pass


# repetition_penalty


@eel.expose
def get_repetition():
    return repetition_penalty


@eel.expose
def set_repetition(rep):
    global repetition_penalty
    repetition_penalty = rep
    pass


# top_k


@eel.expose
def get_top_k():
    return top_k


@eel.expose
def set_top_k(k):
    global top_k
    top_k = k
    pass


# top_p


@eel.expose
def get_top_p():
    return top_p


@eel.expose
def set_top_p(p):
    global top_p
    top_p = p
    pass


# temperature


@eel.expose
def get_temperature():
    return temperature


@eel.expose
def set_temperature(temper):
    global temperature
    temperature = temper
    pass


eel.start("desktop.html", size=(800, 600))


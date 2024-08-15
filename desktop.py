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


eel.start("desktop.html", size=(800, 600))


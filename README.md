# Parsing data/Text generation

Параметры модели:
- max_length: Максимальное количество токенов в сгенерированном тексте. В данном случае, модель будет генерировать текст не длиннее Х токенов, что после GPT-токенизации на русском будет равняться примерно (2/3)*Х словам.
- repetition_penalty: Штраф за повторение, который уменьшает вероятность повтора слов или фраз. Чем выше значение, тем меньше повторов в сгенерированном тексте.
- top_k: Ограничивает количество возможных следующих токенов до top_k (в нашем случае до 5) на каждом шаге генерации, основываясь на их вероятностях. На каждом из шагов выбирается один токен из этих кандидатов. 
- top_p: Устанавливает порог вероятности для отсечения токенов, которые не должны быть учтены при генерации. В данном случае берется минимальный по размеру набор токенов, сумма вероятностей которого не меньше p = Х.
- temperature: Параметр температуры влияет на случайность генерации текста. Чем выше значение, тем более случайным и разнообразным и «креативным» будет текст. Чем ниже значение, тем более детерминированным и предсказуемым будет текст.
- no_repeat_ngram_size: Запрещает повторение n-грамм определенного размера в сгенерированном тексте. В данном случае, модель не будет повторять биграммы, то есть последовательность из двух слов. 

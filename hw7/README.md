1. Использовать строки ES6 для того, чтобы переделать свою матрицу таким образом, чтобы у вас получился HTML, который вы потом вставите на страницу используя `document.write(someHtml)`.
2. Так как используется HTML, то добавить немного стилей для того, чтобы видно было где пустая ячейка, где дерево/куст, а где животное
3. Использовать итератор (for..of) для генерации матрицы 20*20
4. Написать функцию, которая принимает class (ES6). Эта функция возвращает экземпляр прокси. Нужно перехватить вызовы new и добавить экземпляр упомянутого выше класса в WeakMap как ключ. Значением будут аргументы, которые передаются для создания экземпляра упомянутого выше класса.
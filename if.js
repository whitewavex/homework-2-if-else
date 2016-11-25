var memory, color;
memory = +prompt( 'Введите количество встроенной памяти телефона в ГБ','' );
if( memory < 5 ){
    color = prompt( 'Какой должен быть цвет, белый или чёрный?','' );
    if( color == 'белый'){
        document.write( '<h1>Результаты поиска:</h1>' );
        document.write( '<div><img src="images/lenovo_a1000m_white.jpg"><h2>Мобильный телефон Lenovo A (A1000M) White</h2><p>Экран (4", TN, 480x800)/ Spreadtrum SC7731 (1.3 ГГц)/ основная камера: 5 Мп, фронтальная камера: 0.3 Мп/ RAM 512 МБ/ 4 ГБ встроенной памяти + microSD/SDHC (до 32 ГБ)/ 3G/ GPS/ поддержка 2х SIM-карт (Mini-SIM)/ Android 5.1 (Lollipop) / 1700 мА*ч</p><p class="price">Цена: 1599грн</p></div>' );
    }
    else {
        document.write( '<h1>Результаты поиска:</h1><div><img src="images/lenovo_a1000m_black.jpg"><h2>Мобильный телефон Lenovo A (A1000M) Black</h2><p>Экран (4", TN, 480x800)/ Spreadtrum SC7731 (1.3 ГГц)/ основная камера: 5 Мп, фронтальная камера: 0.3 Мп/ RAM 512 МБ/ 4 ГБ встроенной памяти + microSD/SDHC (до 32 ГБ)/ 3G/ GPS/ поддержка 2х SIM-карт (Mini-SIM)/ Android 5.1 (Lollipop) / 1700 мА*ч</p><p class="price">Цена: 1649грн</p></div>');
    }
}
else if( memory > 4 && memory < 9 ){
    color = prompt( 'Какой должен быть цвет, белый или чёрный?','' );
    if( color == 'белый'){
        document.write( '<h1>Результаты поиска:</h1><div><img src="images/lenovo_c2_k10a40_white.jpg"><h2>Мобильный телефон Lenovo C2 (K10a40) White</h2><p>Экран (5", IPS, 1280x720)/ MediaTek MT6735P (1.0 ГГц)/ основная камера: 8 Мп, фронтальная камера: 5 Мп/ RAM 1 ГБ/ 8 ГБ встроенной памяти + microSD/SDHC (до 32 ГБ)/ 3G/ LTE/ GPS/ поддержка 2х SIM-карт (Micro-SIM)/ Android 6.0 (Marshmallow) / 2800 мА*ч</p><p class="price">Цена: 2999грн</p></div>');
    }
    else {
        document.write( '<h1>Результаты поиска:</h1><div><img src="images/lenovo_c2_k10a40_black.jpg"><h2>Мобильный телефон Lenovo C2 (K10a40) Black</h2><p>Экран (5", IPS, 1280x720)/ MediaTek MT6735P (1.0 ГГц)/ основная камера: 8 Мп, фронтальная камера: 5 Мп/ RAM 1 ГБ/ 8 ГБ встроенной памяти + microSD/SDHC (до 32 ГБ)/ 3G/ LTE/ GPS/ поддержка 2х SIM-карт (Micro-SIM)/ Android 6.0 (Marshmallow) / 2800 мА*ч</p><p class="price">Цена: 3049грн</p></div>');
    }
}
else if( memory > 8 && memory < 32 ){
    color = prompt( 'Какой должен быть цвет, белый или чёрный?','' );
    if( color == 'белый'){
        document.write( '<h1>Результаты поиска:</h1><div><img src="images/lenovo_vibe_p1m_white.jpg"><h2>Мобильный телефон Lenovo Vibe P1m White</h2><p>Экран (5", IPS, 1280x720)/ MediaTek MT6735P (1.0 ГГц)/ основная камера: 8 Мп, фронтальная камера: 5 Мп/ RAM 2 ГБ/ 16 ГБ встроенной памяти + microSD/SDHC (до 32 ГБ)/ 3G/ LTE/ GPS/ поддержка 2х SIM-карт (Micro-SIM)/ Android 5.1 (Lollipop) / 4000 мА*ч</p><p class="price">Цена: 3499грн</p></div>');
    }
    else {
        document.write( '<h1>Результаты поиска:</h1><div><img src="images/lenovo_vibe_p1m_black.jpg"><h2>Мобильный телефон Lenovo Vibe P1m Black</h2><p>Экран (5", IPS, 1280x720)/ MediaTek MT6735P (1.0 ГГц)/ основная камера: 8 Мп, фронтальная камера: 5 Мп/ RAM 2 ГБ/ 16 ГБ встроенной памяти + microSD/SDHC (до 32 ГБ)/ 3G/ LTE/ GPS/ поддержка 2х SIM-карт (Micro-SIM)/ Android 5.1 (Lollipop) / 4000 мА*ч</p><p class="price">Цена: 3549грн</p></div>');
    }
}
else {
    document.write( '<h1>Результаты поиска:</h1>' );
    document.write( '<div><h2>Телефонов с таким объёмом памяти в базе нет.</h2></div>' );
}
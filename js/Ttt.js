/**
 * Created by apuc0 on 23.09.2017.
 */
function Ttt() {

    this.initBoard = function (id, options) {

        this.defaultParams = {
            width:'300px',
            height:'300px',
            backgroundColor: 'Black',
            backgroundColorCell: 'White',
            borderColor: 'midnightblue',
            borderWidth: '1px',
            borderType: 'solid',
            fontSize: '5vw'
        };

        this.finalParams = this.defaultParams;

        for (var key in options) {
            if (options.hasOwnProperty(key)) {
                if (options[key] !== undefined) {
                    this.finalParams[key] = options[key];
                }
            }
        }
        this.options = this.finalParams;

        this.board = document.getElementById(id);
        this.board.style.width = this.options.width;
        this.board.style.height = this.options.height;
        this.board.style.backgroundColor = this.options.backgroundColor;
        this.board.style.borderColor = this.options.borderColor;
        this.board.style.borderWidth = this.options.borderWidth;
        this.board.style.borderStyle = this.options.borderStyle;
        this.board.style.fontSize = this.options.fontSize;
        this.createCells();
    };

    this.createCells = function () {
        for (var i=0;i<9;i++){
            var cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('data-type', 0);
            cell.setAttribute('data-position', i+1);
            cell.onclick = this.clickToCell.bind(this);
            cell.style.backgroundColor = this.options.backgroundColorCell;
            this.board.appendChild(cell);
        }
    }
    
    this.firstTurn = function() {
        // var turn = prompt('Выберите кто будет первым ходить (с большой буквы).', "");
        var player01 = prompt('Выберите имя первого игрока.');
    	var player02 = prompt('Выберите имя второго игрока.');
    	var turn = prompt('Выберите какой игрок будет ходить первым.')

        if (turn == player01 || turn == player02) {
            this.activeType = 1;
            alert('Первым ходит ' + turn );
        }
        else {
            prompt( 'Такой игрок не существует, выберите одного из существующих: ' + player01 + ' или ' + player02 );
        }
        // if (turn === 'Крестики') {
        //     this.activeType = 1;
        //     alert('Первыми ходят крестики.');
        // }
        // else if (turn === 'Нолики') {
        //     this.activeType = 2;
        //     alert('Первыми ходят нолики.');
        // }
        // else {
        //     this.activeType = 1;
        //     alert('Я не знаю такого символа, так что первыми ходят всё равно крестики!');
        // }
    }

    this.clickToCell = function (event) {
        if(event.target.getAttribute('data-type') == 0) {
            event.target.innerHTML = this.activeType === 1 ? 'x' : 'o';
            event.target.setAttribute('data-type', this.activeType);
            this.activeType = this.activeType === 1 ? 2 : 1;
            console.log(event.target);
            console.log(this);
        }
    }

    this.getElementByAttr = function (attr, value) {
        var elems = document.getElementsByTagName( '*' );
        for( var i =0; elems.length; i++ ) {
            if ( elems[i].getAttribute( attr ) == value ) {
                return elems[i];
            }
        }
    }

    this.setCellColor = function (position, color) {
        var cell = this.getElementByAttr('data-position', position);
        cell.style.backgroundColor = color;
    }
}
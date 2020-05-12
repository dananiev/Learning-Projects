document.addEventListener('DOMContentLoaded', () => {
    const width = 28;
    const grid = document.querySelector('.grid');
    const layout = [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
        4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
        1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
        1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ];

    const squares = [];

    function createBoard() {
        for (let i = 0; i< layout.length; i++) {
            const square = document.createElement('div');
            grid.appendChild(square);
            squares.push(square);

            if (layout[i] === 1) {
                squares[i].classList.add('wall');
            }
        }
    }

    createBoard();

    let pacmanCurrentIndex = 502;
    squares[pacmanCurrentIndex].classList.add('pac-man');

    let blinkyCurrentIndex = 197;
    squares[blinkyCurrentIndex].classList.add('blinky');

    function getCoordinates(index) {
        return [index % width, Math.floor(index / width)];
    }

    function moveBlinky() {
        const directions = [-1, 1, +width, -width]
        let ghostTimerId = NaN;
        let direction = directions[Math.floor(Math.random() * directions.length)];

        ghostTimerId = setInterval(function() {
            console.log(blinkyCurrentIndex);
            if (!squares[blinkyCurrentIndex + direction].classList.contains('wall')) {
                squares[blinkyCurrentIndex].classList.remove('blinky');

                const [blinkyX, blinkyY] = getCoordinates(blinkyCurrentIndex);
                const [pacmanX, pacmanY] = getCoordinates(pacmanCurrentIndex);
                const [blinkyNextX, blinkyNextY] = getCoordinates(blinkyCurrentIndex + direction);

                function isXCoordCloser() {
                    if ((blinkyNextX - pacmanX) > (blinkyX - pacmanX)) {
                        return true;
                    } else {
                        return false;
                    }
                }
    
                function isYCoordCloser() {
                    if ((blinkyNextY - pacmanY) > (blinkyY - pacmanY)) {
                        return true;
                    } else {
                        return false;
                    }
                }

                if (isXCoordCloser() || isYCoordCloser()) {
                    blinkyCurrentIndex += direction;
                    squares[blinkyCurrentIndex].classList.add('blinky');
                } else {
                    squares[blinkyCurrentIndex].classList.add('blinky');
                    direction = directions[Math.floor(Math.random() * directions.length)];
                }
                squares[blinkyCurrentIndex].classList.add('blinky');
            } else {
                direction = directions[Math.floor(Math.random() * directions.length)];
            }
            
            if (squares[blinkyCurrentIndex].classList.contains('pac-man')) {
                clearInterval(ghostTimerId);
            }
        }, 300);
    }

    moveBlinky();
});
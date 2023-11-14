import React, { Component, createRef } from 'react';
import './App.css';
import { AppsBar } from 'components/AppsBar';
import { Icon } from 'components/Icon';


class App extends Component {

    constructor(props) {
        super(props);
        this.canvas = createRef();
        this.width = 1000;
        this.height = 700;
        this.maxScaleFactor = .7;
        this.state = {
            scaleFactor: this.getScaleFactor(),
            republican: false,
            coat: null,
            size: 'x',
            position: 'left'
        }
        this.availableSizes = {
            x: 200,
            s: 240,
            m: 420,
            l: 590
        }
        this.availablePositions = {
            left: [300, 300],
            center: [450, 300],
            right: [600, 300]
        }
        this.availableCoats = {
            constitucional: createRef(),
            franquista: createRef(),
            republicano: createRef(),
            agujero: createRef(),
            shahada: createRef(),
            sol_de_mayo: createRef(),
            venezuela: createRef(),
            marruecos: createRef(),
            nazi: createRef(),
            estrella: createRef(),
            mercadona: createRef(),
            paris: createRef(),
            sagrado_corazon: createRef(),
            roto2: createRef(),
            falange: createRef(),
            david: createRef(),
            only: createRef(),
            minusvalido: createRef()
        }
    }

    componentDidMount() {
        window.addEventListener("resize", () => {
            this.setState({scaleFactor: this.getScaleFactor()});
            this.drawCanvas();
        })
        this.drawCanvas();
    }

    getScaleFactor(){
        if(window.innerWidth < this.width * this.maxScaleFactor){
            return window.innerWidth / this.width;
        }
        return this.maxScaleFactor;
    }

    drawCanvas() {
        let tempCanvas = this.getTempCanvas();
        const realContext = this.canvas.current.getContext("2d");
        realContext.drawImage(tempCanvas, 0, 0, this.width * this.state.scaleFactor, this.height * this.state.scaleFactor);
    }

    getTempCanvas() {
        const tempCanvas = document.createElement("canvas");
        tempCanvas.width = this.width;
        tempCanvas.height = this.height;
        const tempContext = tempCanvas.getContext("2d");
        tempContext.fillStyle = "white";
        tempContext.fillRect(0, 0, this.width, this.height);
        this.drawFlag(tempContext);
        this.drawCoat(tempContext);
        this.drawUrl(tempContext);
        return tempCanvas;
    }

    drawFlag(context) {
        if(this.state.republican){
            context.fillStyle = "#da121a";
            context.fillRect(50, 50, 900, 200);
            context.fillStyle = "#fcdd09";
            context.fillRect(50, 250, 900, 200);
            context.fillStyle = "#630b57";
            context.fillRect(50, 450, 900, 200);

        }
        else {
            context.fillStyle = "#ad1519";
            context.fillRect(50, 50, 900, 150);
            context.fillStyle = "#fabd00";
            context.fillRect(50, 200, 900, 300);
            context.fillStyle = "#ad1519";
            context.fillRect(50, 500, 900, 150);
        }
    }

    drawCoat(context) {
        if(this.state.coat) {
            const origin = [
                this.availablePositions[this.state.position][0] + 50 - this.availableSizes[this.state.size] / 2,
                this.availablePositions[this.state.position][1] + 50 - this.availableSizes[this.state.size] / 2
            ]
            context.drawImage(this.state.coat, origin[0], origin[1], this.availableSizes[this.state.size], this.availableSizes[this.state.size]);
        }
    }

    drawUrl(context) {
        context.font = "40px ComicTypo";
        context.textAlign = "center";
        context.fillStyle = "black";
        context.fillText("progredemente.com/esquizobanderas", this.width / 2 , this.height - 15);
    }

    load() {
        let input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/png, image/jpeg';
        input.onchange = () => {
            let fr = new FileReader();
            fr.addEventListener('load', (e) => {
                let loadedImage = new Image();
                loadedImage.src = e.target.result;
                loadedImage.onload = () => {
                    const side = Math.max(loadedImage.width, loadedImage.height);
                    const tempCanvas = document.createElement("canvas");
                    tempCanvas.width = side;
                    tempCanvas.height = side;
                    const tempContext = tempCanvas.getContext("2d");
                    tempContext.drawImage(loadedImage, side / 2 - loadedImage.width / 2, side / 2 - loadedImage.height / 2);
                    this.setState({coat: tempCanvas}, () => this.drawCanvas);
                }
            });
            fr.readAsDataURL(input.files[0]);
        }
        input.click();
    }

    download() {
        const link = document.createElement('a');
        link.download = 'esquizobanderas.png';
        const canvas = this.getTempCanvas();
        canvas.toBlob((blob) => {
            let url = URL.createObjectURL(blob);
            link.href = url;
            link.click();
        })

    }

    render() {
        return (
            <AppsBar current='esquizobanderas'>
                <div className='app'>
                    <div className='flag-container'>
                        <div className='title'>
                            <img src={'./esquizobanderas.png'} alt="logo" className='logo' />
                            <div className='subtitle'>
                                <div>
                                    Crea la bandera que más se ajuste a tu delirio
                                </div>
                                <div>
                                    por <a href="/" target="_blank">progredemente</a>
                                </div>
                            </div>
                        </div>
                        <canvas ref={this.canvas} width={this.width * this.state.scaleFactor} height={this.height * this.state.scaleFactor}/>
                        {
                            this.state.coat &&
                            <div className='prg-button download' onClick={() => {this.download() }}>Descargar&nbsp;<Icon icon="D" /></div>
                        }
                    </div>
                    <div className='options-container'>
                        <div className='options-title'>Opciones</div>
                        <div className='options'>
                            <div>
                                -50 de IQ
                                <span
                                    className={`prg-button autism ${!this.state.republican ? ' republican': ''}`}
                                    onClick={() => this.setState({republican: !this.state.republican}, this.drawCanvas)}
                                >
                                    {this.state.republican ? 'Desa' : 'A'}ctivar
                                </span>
                            </div>
                            <div>
                                <div className='option-title'>Escudo</div>
                                <div className='option-content coats'>
                                    {
                                        Object.keys(this.availableCoats).map((c) => {
                                            return (
                                                <img
                                                    key={c}
                                                    src={`./${c}.png`}
                                                    alt={c}
                                                    className={this.state.coat != null && this.state.coat === this.availableCoats[c].current ? 'selected' : ''}
                                                    onClick={() => {
                                                        this.setState({coat: this.availableCoats[c].current}, this.drawCanvas)
                                                    }}
                                                    ref={this.availableCoats[c]}
                                                />
                                            );
                                        })
                                    }
                                    <span className='prg-button' onClick={() => { this.load(); }}>Elige el tuyo propio</span>
                                </div>
                            </div>
                            {
                                this.state.coat &&
                                <div>
                                    <div className='option-title'>Tamaño y posición</div>
                                    <div className='option-content'>
                                        <div className='modification-container'>
                                            <div className='size-container'>
                                                <div
                                                    className={`prg-button size-action${Object.keys(this.availableSizes).indexOf(this.state.size) === 0 ? ' hide': ''}`}
                                                    onClick={() => this.setState({size: Object.keys(this.availableSizes)[Object.keys(this.availableSizes).indexOf(this.state.size) - 1]}, this.drawCanvas)}
                                                >
                                                    -
                                                </div>
                                                <div
                                                    style={{
                                                        "--size": this.availableSizes[this.state.size] / 600,
                                                        "--modification-x": this.availablePositions[this.state.position][0] / 600,
                                                        "--modification-y": this.availablePositions[this.state.position][1] / 600
                                                    }}
                                                    className="modification"
                                                >
                                                </div>
                                                <div
                                                    className={`prg-button size-action${Object.keys(this.availableSizes).indexOf(this.state.size) === 3 ? ' hide': ''}`}
                                                    onClick={() => this.setState({size: Object.keys(this.availableSizes)[Object.keys(this.availableSizes).indexOf(this.state.size) + 1]}, this.drawCanvas)}
                                                >
                                                    +
                                                </div>
                                            </div>
                                            <div className='position-container'>
                                                <div
                                                    className={`prg-button position-action${Object.keys(this.availablePositions).indexOf(this.state.position) === 0 ? ' hide': ''}`}
                                                    onClick={() => this.setState({position: Object.keys(this.availablePositions)[Object.keys(this.availablePositions).indexOf(this.state.position) - 1]}, this.drawCanvas)}
                                                >
                                                    &lt;&lt;
                                                </div>
                                                <div
                                                    className={`prg-button position-action${Object.keys(this.availablePositions).indexOf(this.state.position) === 2 ? ' hide': ''}`}
                                                    onClick={() => this.setState({position: Object.keys(this.availablePositions)[Object.keys(this.availablePositions).indexOf(this.state.position) + 1]}, this.drawCanvas)}
                                                >
                                                    &gt;&gt;
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </AppsBar>
        );
    }
}

export default App;

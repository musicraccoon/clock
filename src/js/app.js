import '../scss/app.scss';

class Clock {
    constructor() {
        this._prefix = '--ck-';

        this.h = 0;
        this.m = 0;
        this.s = 0;

        this._a = 360 / 12;
        this._b = 360 / 60;

        setInterval(() => this.render(), 1000);
    }

    render() {
        const date = new Date();

        this.h = date.getHours();
        this.m = date.getMinutes();
        this.s = date.getSeconds();

        const properties = {
            'arrow-hours-angle': this._a * this.h,
            'arrow-minutes-angle': this._b * this.m,
            'arrow-seconds-angle': this._b * this.s,
        };

        Object.entries(properties).forEach(([k, v]) => {
            document.documentElement.style.setProperty(`${this._prefix + k}`, `${v}deg`)
        });
    }
}

new Clock();

"use strict"; 

class Draw_line_app {

    onReady() {
        // initiate the app
        this.canvas = document.getElementById("canvas");
        this.context = this.canvas.getContext("2d");
        // initiate the rest of the app
    }

    draw_axes() {
        // draw the x and y axis lines
    }

    draw_axis_labels() {
        // draw in the labels for the axes
    }

    draw_line() {
        // draw the line once the "draw" button is clicked
    }

    clear_canvas() {
        // clear your canvas
    }

}


let app = new Draw_line_app();
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => app.onReady());
} else {
    app.onReady();
}
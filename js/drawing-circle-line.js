class DrawingCircleLine extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        $('#line-width').show();
    }
    onMouseDown(coord, event){
        this.contextReal.strokeStyle = rgbaColor;
        this.contextDraft.strokeStyle = rgbaColor;
        this.contextReal.lineWidth = lineSize;
        this.contextDraft.lineWidth = lineSize;

    }
    onDragging(coord, event){
        this.contextDraft.beginPath();
        this.contextReal.beginPath();
        this.contextDraft.arc(coord[0], coord[1], 15, 0, 2 * Math.PI);
        this.contextReal.arc(coord[0], coord[1], 15, 0, 2 * Math.PI);
        this.contextDraft.stroke();
        this.contextReal.stroke();
    }
    onMouseMove(){}
    onMouseUp(coord, event){
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    }
    onMouseLeave(){}
    onMouseEnter(){}
}
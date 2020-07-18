/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2019 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */

// jscs:disable
// jshint ignore: start

!function(window,document,undefined){var absPos=function(element){var offsetLeft,offsetTop;if(offsetLeft=offsetTop=0,element.offsetParent)for(;offsetLeft+=element.offsetLeft,offsetTop+=element.offsetTop,element=element.offsetParent;);return[offsetLeft,offsetTop]},ProgressCircle=function(params){this.canvas=params.canvas,this.minRadius=params.minRadius||15,this.arcWidth=params.arcWidth||5,this.gapWidth=params.gapWidth||3,this.centerX=params.centerX||this.canvas.width/2,this.centerY=params.centerY||this.canvas.height/2,this.infoLineLength=params.infoLineLength||60,this.horizLineLength=params.horizLineLength||10,this.infoLineAngleInterval=params.infoLineAngleInterval||Math.PI/8,this.infoLineBaseAngle=params.infoLineBaseAngle||Math.PI/6,this.context=this.canvas.getContext("2d"),this.width=this.canvas.width,this.height=this.canvas.height,this.circles=[],this.runningCount=0};ProgressCircle.prototype={constructor:ProgressCircle,addEntry:function(params){return this.circles.push(new Circle({canvas:this.canvas,context:this.context,centerX:this.centerX,centerY:this.centerY,innerRadius:this.minRadius+this.circles.length*(this.gapWidth+this.arcWidth),arcWidth:this.arcWidth,infoLineLength:this.infoLineLength,horizLineLength:this.horizLineLength,id:this.circles.length,fillColor:params.fillColor,outlineColor:params.outlineColor,progressListener:params.progressListener,infoListener:params.infoListener,infoLineAngle:this.infoLineBaseAngle+this.circles.length*this.infoLineAngleInterval})),this},start:function(interval){var self=this;return this.timer=setInterval(function(){self._update()},interval||33),this},update:function(value){this._update(value)},stop:function(){clearTimeout(this.timer)},_update:function(value){return this._clear(),this.circles.forEach(function(circle,idx,array){circle.update(value)}),this},_clear:function(){return this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this}};var Circle=function(params){if(this.id=params.id,this.canvas=params.canvas,this.context=params.context,this.centerX=params.centerX,this.centerY=params.centerY,this.arcWidth=params.arcWidth,this.innerRadius=params.innerRadius||0,this.fillColor=params.fillColor||"#fff",this.outlineColor=params.outlineColor||this.fillColor,this.progressListener=params.progressListener,this.infoLineLength=params.infoLineLength||250,this.horizLineLength=params.horizLineLength||50,this.infoListener=params.infoListener,this.infoLineAngle=params.infoLineAngle,this.outerRadius=this.innerRadius+this.arcWidth,this.infoListener){var angle=this.infoLineAngle,arcDistance=(this.innerRadius+this.outerRadius)/2,sinA=Math.sin(angle),cosA=Math.cos(angle);this.infoLineStartX=this.centerX+sinA*arcDistance,this.infoLineStartY=this.centerY-cosA*arcDistance,this.infoLineMidX=this.centerX+sinA*this.infoLineLength,this.infoLineMidY=this.centerY-cosA*this.infoLineLength,this.infoLineEndX=this.infoLineMidX+(sinA<0?-this.horizLineLength:this.horizLineLength),this.infoLineEndY=this.infoLineMidY;var infoText=document.createElement("div"),style=infoText.style;style.color=this.fillColor,style.position="absolute",style.left=this.infoLineEndX+absPos(this.canvas)[0]+"px",infoText.className="ProgressCircleInfo",infoText.id="progress_circle_info_"+this.id,document.body.appendChild(infoText),this.infoText=infoText}};Circle.prototype={constructor:Circle,update:function(value){this.progress=value||this.progressListener(),this._draw(),this.infoListener&&(this.info=this.infoListener(),this._drawInfo())},_draw:function(){var ctx=this.context,startAngle=0+-Math.PI/2,endAngle=startAngle+this.progress*Math.PI*2,x=this.centerX,y=this.centerY,innerRadius=this.innerRadius,outerRadius=this.outerRadius;return ctx.fillStyle=this.fillColor,ctx.strokeStyle=this.outlineColor,ctx.beginPath(),ctx.arc(x,y,innerRadius,startAngle,endAngle,!1),ctx.arc(x,y,outerRadius,endAngle,startAngle,!0),ctx.closePath(),ctx.stroke(),ctx.fill(),this},_drawInfo:function(){var pointList,lineHeight;return pointList=[[this.infoLineStartX,this.infoLineStartY],[this.infoLineMidX,this.infoLineMidY],[this.infoLineEndX,this.infoLineEndY]],this._drawSegments(pointList,!1),this.infoText.innerHTML=this.info,lineHeight=this.infoText.offsetHeight,this.infoText.style.top=this.infoLineEndY+absPos(this.canvas)[1]-lineHeight/2+"px",this},_drawSegments:function(pointList,close){var ctx=this.context;ctx.beginPath(),ctx.moveTo(pointList[0][0],pointList[0][1]);for(var i=1;i<pointList.length;++i)ctx.lineTo(pointList[i][0],pointList[i][1]);close&&ctx.closePath(),ctx.stroke()}},window.ProgressCircle=ProgressCircle}(window,document);
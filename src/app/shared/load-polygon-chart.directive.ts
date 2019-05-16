import { Directive, ElementRef, HostBinding, Input, OnChanges } from '@angular/core';
import { HumanizePipe } from './humanize.pipe';
import { area, curveStepAfter } from 'd3-shape';
import * as moment from 'moment';
import { scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';

export interface DataType {
  x: any,
  y: any
}

@Directive({
  selector: '[appLoadPolygonChart]'
})
export class LoadPolygonChartDirective implements OnChanges {
  public margin = 0;
  public padding = 0;
  public data = [];

  humanize = new HumanizePipe();

  @HostBinding('attr.data-tooltip')
  @Input() dataTooltip: string;
  @Input() appLoadPolygonChart: Array<{}>;
  @Input() xkey: string;
  @Input() ykey: string;
  @Input() measurement: string;
  @Input() width = 300;
  @Input() height = 30;

  constructor(public elementRef: ElementRef) {
  }

  ngOnChanges() {
    this.drawPolygonChart();
  }

  findHighestY() {
    const values = this.appLoadPolygonChart.map(data => +data[this.ykey] || 0);
    return Math.max(...values);
  }

  findMinY() {
    const values = this.appLoadPolygonChart.map(data => +data[this.ykey] || 0);
    return Math.min(...values);
  }

  findHighestX() {
    const values = this.appLoadPolygonChart.map(data => +moment.utc(data[this.xkey]) || 0);
    return Math.max(...values);
  }

  findMinX() {
    const values = this.appLoadPolygonChart.map(data => +moment.utc(data[this.xkey]) || 0);
    return Math.min(...values);
  }

  drawPolygonChart() {
    const chart = select(this.elementRef.nativeElement);
    chart.selectAll('*').remove();

    const svg = chart.append('svg')
      .attr('class', 'axis')
      .attr('width', this.width)
      .attr('height', this.height);

    const xAxisLength = this.width - 2 * this.margin;
    const yAxisLength = this.height - 2 * this.margin;

    const scaleX = scaleLinear()
      .domain([this.findMinX(), this.findHighestX()])
      .range([0, xAxisLength]);

    const scaleY = scaleLinear()
      .domain([this.findHighestY(), this.findMinY()])
      .range([0, yAxisLength]);

    this.data = this.appLoadPolygonChart.map(item =>
      new Object({
        x: scaleX(moment.utc(item[this.xkey])),
        y: scaleY(item[this.ykey] || 0) + this.margin
      }));

    const areaBar = area<DataType>().curve(curveStepAfter)
      .x(d => d.x)
      .y0(this.height - this.margin)
      .y1(d => d.y);

    const g = svg.append('g');
    g.append('path')
      .attr('d', areaBar(this.data))
      .style('fill', '#d9721f');
  }
}
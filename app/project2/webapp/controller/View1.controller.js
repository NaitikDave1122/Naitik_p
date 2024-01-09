sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/suite/ui/commons/ChartContainer",
    "sap/suite/ui/commons/ChartContainerContent",
    "sap/viz/ui5/data/FlattenedDataset",
    "sap/viz/ui5/controls/common/feeds/FeedItem",
    "sap/ui/model/json/JSONModel",
    "sap/viz/ui5/controls/VizFrame",
    "sap/m/MessageToast",
    "sap/base/Log"
],
    function (Controller, ChartContainer, ChartContainerContent) {
        "use strict";

        return Controller.extend("project2.project2.controller.View1", {
            onInit: function () {
                var oVizFrame = this.getView().byId("idcolumn");
                var oDonutChart = this.getView().byId("idDonutChart");
                var oPieChart = this.getView().byId("idPieChart");
                var linechart = this.getView().byId("Idlinechart");
                var oView = this.getView();
    
                // Bar Chart

    
                var oDataset = new sap.viz.ui5.data.FlattenedDataset({
                    dimensions: [{
                        name: 'Name',
                        value: "{Name}"
                    }],
                    measures: [{
                        name: 'EmpCount',
                        value: '{EmpCount}'
                    }],
                    data: {
                        path: "D1>/Department"
                    }
                });
                oVizFrame.setDataset(oDataset);
                oVizFrame.setVizType('bar');
    
                oVizFrame.setVizProperties({
                    plotArea: {
                        colorPalette: d3.scale.category20().range()
                    },
                    title: {
                        text: "Population Over Years" // Replace with your desired title
                    }
                });
    
                var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
                    'uid': "valueAxis",
                    'type': "Measure",
                    'values': ["EmpCount"]
                });
                var feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
                    'uid': "categoryAxis",
                    'type': "Dimension",
                    'values': ["Name"]
                });
                oVizFrame.addFeed(feedValueAxis);
                oVizFrame.addFeed(feedCategoryAxis);
    
                // Donut Chart
                var oDonutModel = new sap.ui.model.json.JSONModel();
                
                var oDonutDataset = new sap.viz.ui5.data.FlattenedDataset({
                    dimensions: [{
                        name: 'Department',
                        value: "{Name}"
                    }],
                    measures: [{
                        name: 'EmployeeCount',
                        value: '{EmpCount}'
                    }],
                    data: {
                        path: "D1>/Department"
                    }
                });
                oDonutChart.setDataset(oDonutDataset);
                oDonutChart.setModel(oDonutModel);
                oDonutChart.setVizType('donut');
    
                oDonutChart.setVizProperties({
                    plotArea: {
                        drawingEffect: 'glossy'
                    },
                    title: {
                        text: 'Donut Chart Example'
                    }
                });
    
                var donutFeedSize = new sap.viz.ui5.controls.common.feeds.FeedItem({
                    'uid': "size",
                    'type': "Measure",
                    'values': ["EmployeeCount"]
                });
    
                var donutFeedColor = new sap.viz.ui5.controls.common.feeds.FeedItem({
                    'uid': "color",
                    'type': "Dimension",
                    'values': ["Department"]
                });
    
                oDonutChart.addFeed(donutFeedSize);
                oDonutChart.addFeed(donutFeedColor);
    
                // Pie Chart
                
                var oPieDataset = new sap.viz.ui5.data.FlattenedDataset({
                    dimensions: [{
                        name: 'Department',
                        value: "{Name}"
                    }],
                    measures: [{
                        name: 'EmpCount',
                        value: '{EmpCount}'
                    }],
                    data: {
                        path: "D1>/Department"
                    }
                });
    
                oPieChart.setDataset(oPieDataset);
              
                oPieChart.setVizType('pie');
    
                oPieChart.setVizProperties({
                    plotArea: {
                        colorPalette: d3.scale.category20().range()
                    },
                    title: {
                        text: 'Pie Chart Example'
                    }
                });
    
                var pieFeedSize = new sap.viz.ui5.controls.common.feeds.FeedItem({
                    'uid': "size",
                    'type': "Measure",
                    'values': ["EmpCount"]
                });
    
                var pieFeedColor = new sap.viz.ui5.controls.common.feeds.FeedItem({
                    'uid': "color",
                    'type': "Dimension",
                    'values': ["Department"]
                });
    
                oPieChart.addFeed(pieFeedSize);
                oPieChart.addFeed(pieFeedColor);
    
                // Line Chart
             
                var oLineDataset = new sap.viz.ui5.data.FlattenedDataset({
                    dimensions: [{
                        name: 'Department',
                        value: "{Name}"
                    }],
                    measures: [{
                        name: 'EmpCount',
                        value: '{EmpCount}'
                    }],
                    data: {
                        path: "D1>/Department"
                    }
                });
    
                linechart.setDataset(oLineDataset);
                linechart.setVizType('line');
    
                linechart.setVizProperties({
                    plotArea: {
                        colorPalette: d3.scale.category20().range()
                    },
                    title: {
                        text: 'Line Chart Example'
                    }
                });
    
                var lineFeedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
                    'uid': "valueAxis",
                    'type': "Measure",
                    'values': ["EmpCount"]
                });
    
                var lineFeedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
                    'uid': "categoryAxis",
                    'type': "Dimension",
                    'values': ["Department"]
                });
    
                linechart.addFeed(lineFeedValueAxis);
                linechart.addFeed(lineFeedCategoryAxis);
    
                // Set animation properties after creating and setting up VizFrames
                oVizFrame.setVizProperties({
                    animation: {
                        dataLoading: true,
                        dataUpdating: true
                    }
                });
    
                oDonutChart.setVizProperties({
                    animation: {
                        dataLoading: true,
                        dataUpdating: true
                    }
                });
    
                oPieChart.setVizProperties({
                    animation: {
                        dataLoading: true,
                        dataUpdating: true
                    }
                });
    
                linechart.setVizProperties({
                    animation: {
                        dataLoading: true,
                        dataUpdating: true
                    }
                });
    
                this.adjustMyChartBox(oView, "idcolumn", "cell");
                this.adjustMyChartBox(oView, "idDonutChart", "cell2");
                this.adjustMyChartBox(oView, "idPieChart", "cell3");
                this.adjustMyChartBox(oView, "Idlinechart", "cell4");
            },
    
            adjustMyChartBox: function (oView, sChartId, sBlockId) {
                var oVizFrame = oView.byId(sChartId);
    
                // Create ChartContainerContent with the VizFrame
                var oChartContainerContent = new ChartContainerContent({
                    content: [oVizFrame]
                });
    
                // Create ChartContainer and add the ChartContainerContent
                var oChartContainer = new ChartContainer({
                    content: [oChartContainerContent]
                });
    
                // Set properties for ChartContainer
                oChartContainer.setShowFullScreen(true);
                oChartContainer.setAutoAdjustHeight(true);
    
                // Add the ChartContainer to the BlockLayoutCell
                oView.byId(sBlockId).addContent(oChartContainer);
            
            
            
            
            }
        });
    });

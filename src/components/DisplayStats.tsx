import React, { useState, useEffect } from 'react';
import { IonAvatar, IonLabel, IonList, IonItem } from '@ionic/react';
import { useLocation } from 'react-router';
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts";
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);


interface DataFormat {
    all?: number[],
    owner?: boolean,

}
interface commit {

    label: string,
    value: number;
}


interface Data { commits: commit[] };

const DisplayStats: React.FC<DataFormat> = ({ all, owner }) => {
    const location = useLocation()
    const [data, setData] = useState<Data>({
        commits: [{
            label: "0",
            value: 0,
        }]
    })
    var i: number = 0
    const data2 = [
        { label: "Venezuela", " value": "290" },
        { label: "Saudi", value: "260" },
        { label: "Canada", value: "180" },
        { label: "Iran", value: "140" },
        { label: "Russia", value: "115" },
        { label: "UAE", value: "100" },
        { label: "US", value: "30" },
        { label: "China", value: "30" }
    ]
    let data_tab: any = JSON.stringify(all);
    all ? (all
        .map((week) => {

            console.log(week)
            data.commits.push({
                label: i.toString(),
                value: week,

            })


            i = i + 1


        })) : console.log("ggg")
    const base = JSON.stringify(data.commits)
    const base3 = data.commits

    const dataSource = {
        chart: {
            caption: "Number of commits during the 52 last weeks",
            xAxisName: "Week",
            yAxisName: "Number of commits",
            theme: "fusion"
        },
        data: base3
    };

    const chartConfigs = {
        type: "line",
        width: 600,
        height: 400,
        dataFormat: "json",
        dataSource: dataSource
    };


    return (
        <>
            <ReactFC {...chartConfigs} />


        </>
    )


}

export default DisplayStats;


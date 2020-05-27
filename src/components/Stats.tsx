import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { IonContent, IonPage, IonHeader, IonList, IonItem, IonLoading } from '@ionic/react';
import DisplayStats from "./DisplayStats";

interface StatsProps extends RouteComponentProps<{
    pseudo: string,
    repository: string;
}> { }


const Infos: React.FC<StatsProps> = ({ match }) => {
    const [data, setData] = useState<any>();
    const [busy, setBusy] = useState<boolean>(true)

    useEffect(() => {
        fetch("https://api.github.com/repos/" + match.params.pseudo + "/" + match.params.repository + "/stats/participation", {
            method: "GET",
            headers: {
                'Authorization': "token 2944ac4205e293fce47c812989f7d998396b77cb"
            }
        })
            .then((resp) => resp.json())
            .then((resp_json) =>
                setData(resp_json)
            )
    }, [])

    console.log(data)

    return (
        <>
            <IonPage>

                {data ?
                    <IonContent>
                        <DisplayStats all={data.all} owner={data.owner} />
                    </IonContent> :

                    <IonLoading message="Loading..." duration={2000} isOpen={busy} />}
                }
            </IonPage>
        </>)
}


export default Infos;

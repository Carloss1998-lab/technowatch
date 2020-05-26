import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { IonContent, IonPage, IonHeader, IonList, IonItem, IonLoading } from '@ionic/react';
import DisplayInfosDetails from './DisplayInfosDetail';


interface DetailsInfosProps extends RouteComponentProps<{
    techno: string,
    techno_item: string,
    repository: string,
    login: string;

}> { }




const InfosDetails: React.FC<DetailsInfosProps> = ({ match }) => {

    const [data, setData] = useState<any>();
    const [readme, setReadMe] = useState<any>();
    const [busy, setBusy] = useState<boolean>(true)


    var myHeaders = new Headers({
        'Accept': 'application/vnd.github.v3.raw'
    });



    useEffect(() => {
        fetch(" https://api.github.com/repos/" + match.params.login + "/" + match.params.techno_item)
            .then((resp) => resp.json())
            .then((resp_json) =>
                setData(resp_json)
            )
    }, [])
    console.log(match.params.techno_item)

    useEffect(() => {
        fetch("https://api.github.com/repos/" + match.params.login + "/" + match.params.techno_item + "/readme")
            .then((resp) => resp.json())
            .then((resp_json) =>
                setReadMe(atob(resp_json.content))
            )
    }, [])

    console.log(data)
    console.log(readme)



    return (
        <IonPage>

            {data ?
                <IonContent>
                    <DisplayInfosDetails
                        updated_at={data ? data.updated_at : undefined}
                        created_at={data ? data.created_at : undefined}
                        language={data ? data.language : undefined}
                        clone_url={data ? data.clone_url : undefined}
                        name={data ? data.name : undefined}
                        description={data ? data.description : undefined}
                        owner={data ? data.owner : undefined}
                        readme={readme ? readme : undefined} />

                </IonContent> :
                <IonLoading message="Loading..." duration={2000} isOpen={busy} />}

        </IonPage>
    )
}

export default InfosDetails;

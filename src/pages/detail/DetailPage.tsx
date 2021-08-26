import React from 'react'
import {RouteComponentProps} from 'react-router-dom'


interface MatchParams{
    touristRouteId:string
}

export const DetailPage:React.FC<RouteComponentProps<MatchParams>>=(props)=>{
    console.log(props)
    return <h1>id:{props.match.params.touristRouteId}</h1>
}
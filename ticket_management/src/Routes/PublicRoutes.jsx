import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Component/Home'

export default function () {
    return (
        <>
            <Switch>
                <Route path='/' exact component={Home} />
            </Switch>
        </>
    )
}
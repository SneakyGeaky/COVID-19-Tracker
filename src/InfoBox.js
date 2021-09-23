import React from 'react';
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core"

function InfoBox({ title, cases, isRed, isOrange, active, total, ...props }) {
    return (
        <Card 
        onClick = {props.onClick}
        className = {`infoBox ${active && "infoBox--selected"} ${isRed && "infoBox--red"} ${isOrange && "infoBox--orange"}`}>
            <CardContent>
                {/* Title i.e Coronavirus cases*/}
                <Typography className = "infoBox__title" color = "textSecondary">
                    {title}
                </Typography>

                {/* +120K Number  of cases */}

                <h2 className = {`infoBox__cases ${!isRed && !isOrange && "infoBox__cases--green"}`}> {cases} : today </h2>

                {/* 1.2M Total */}
                <Typography className = "infoBox__total">
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox

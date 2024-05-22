import { useContext } from "react"
import LightSwitch from "../Mode-Switch"
import Accordian from "../accordian"
import RandomColor from "../random-color"
import TicTacToe from "../tic-tac-toe"
import TreeView from "../tree-view"
import { FeatureFlagsContext } from "./context"
import menus from "../tree-view/data"



export default function FeatureFlags(){


    const {loading,enabledFlags} = useContext(FeatureFlagsContext);

    const componentsToRender =[
        {
            key:'showLightAndDarkMode',
            component : <LightSwitch/>
        },
        {
            key:'showTicTacToeBoard',
            component : <TicTacToe/>
        },
        {
            key:'showRandomColorGenerator',
            component : <RandomColor/>
        },
        {
            key:'showAccordian',
            component : <Accordian/>
        },
        {
            key:'showTreeView',
            component : <TreeView menus={menus}/>
        }
    ]

    function checkEnabledFlags(getCurrentKey){
        return enabledFlags[getCurrentKey]
    }

    if(loading) return <div><h1>Loading Data! Please wait.</h1></div>

    return (
        <div>
            <h1> Feature Flags</h1>
            {
                componentsToRender.map(componentItem => checkEnabledFlags(componentItem.key) ? componentItem.component : null)
            }
        </div>
    )
}
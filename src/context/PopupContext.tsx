import * as React from 'react';
import { FC, ReactNode, useState } from 'react';

export interface IPopupObject {
    show : (title : string, content : ReactNode) => void;
}

export interface IPopupProvider {
    popup : IPopupObject;
}

export const PopupContext = React.createContext<IPopupProvider>({ popup : { show : () => {} } });

export const PopupProvider : FC = (props) => {
    // @ts-ignore
    const Toggle = ({ children, className }) => (
        <PopupContext.Consumer>
            { data => (
                // @ts-ignore
                <button aria-label="toggle modal" onClick={ data.popup.show } className={ className }>
                    { children }
                </button>
            ) }
        </PopupContext.Consumer>
    );

    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState(null);

    const toggleShow = (title : string, content : ReactNode) => {
        setIsOpen(!isOpen)
        setTitle(title)
        // @ts-ignore
        setContent(content)

    };

    const displayTitle = typeof title !== 'string' ? null : title;

    const { children } = props;

    return (
        <PopupContext.Provider value={
            {
                popup : {
                    show : toggleShow,
                }
            }
        }>
            <Toggle className={ `overlay ${ isOpen && 'active' }` } children={ '' }/>

            <div className={ `inner ${ isOpen && 'active' }` }>
                <div className="header">
                    { displayTitle }
                </div>
                <div className="content">
                    { content }
                </div>
            </div>
            { children }

        </PopupContext.Provider>
    );

}

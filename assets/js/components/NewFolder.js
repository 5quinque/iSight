import React from 'react';
import PropTypes from 'prop-types';
import { CheckIcon, PlusCircleIcon, XIcon } from '@primer/octicons-react';
import { Button, ButtonDanger, ButtonGroup, TextInput } from '@primer/components';

export default function NewFolder(props) {
    const { creatingNewFolder, onNewFolderClick, onCloseNewFolderClick} = props;

    return (
        <div>
        {creatingNewFolder ? (
            <div>
            <TextInput aria-label="Name" name="Name" placeholder="Name" />
            <ButtonGroup className="input-group" display='block' my={2}>
                <Button
                    onClick={() => console.log('button click')}
                ><CheckIcon /></Button>
                <ButtonDanger onClick={() => onCloseNewFolderClick()}>
                    <XIcon />
                </ButtonDanger>
            </ButtonGroup>
            </div>
        ) : (
            <Button onClick={() => onNewFolderClick()}>
                <PlusCircleIcon /> New Folder
            </Button>
        )}
        </div>
    );
}

NewFolder.propTypes = {
    creatingNewFolder: PropTypes.bool,
    onNewFolderClick: PropTypes.func.isRequired,
    onCloseNewFolderClick: PropTypes.func.isRequired
}
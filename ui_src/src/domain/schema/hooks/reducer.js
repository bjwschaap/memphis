// Copyright 2021-2022 The Memphis Authors
// Licensed under the MIT License (the "License");
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// This license limiting reselling the software itself "AS IS".

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

const Reducer = (schemaState, action) => {
    let updateState = schemaState?.schemaList;
    let index;
    if (action.payload?.schemaName) {
        index = schemaState?.schemaList?.findIndex((schema) => schema.name === action.payload?.schemaName);
    }

    switch (action.type) {
        case 'SET_SCHEMAS_DETAILS':
            return {
                ...schemaState,
                schemaList: action.payload
            };
        case 'SET_SCHEMAS_DETAILS_WITH_FILTER':
            return {
                ...schemaState,
                schemaFilteredList: action.payload
            };
        case 'SET_SOCKET_DATA':
            return {
                ...schemaState,
                schemaList: action.payload
            };
        case 'SET_TAGS':
            updateState[index].tags = action.payload.tags;
            return {
                ...schemaState,
                schemaList: updateState
            };
        case 'SET_SCHEMA':
            updateState[index] = action.payload.schemaDetails;
            return {
                ...schemaState,
                schemaList: updateState
            };
        default:
            return schemaState;
    }
};

export default Reducer;
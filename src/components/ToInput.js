import React, { useState } from 'react'
import { Select } from 'antd';
const { Option, OptGroup } = Select;

const ToInput = () => {
    const options = [];
    for (let i = 10; i < 36; i++) {
        const value = i.toString(36) + i;
        options.push({
            label: `Long Label: ${value}`,
            value,
        });
    }
    const [value, setValue] = useState(['a10', 'c12', 'h17', 'j19', 'k20']);
    const selectProps = {
        mode: 'multiple',
        style: {
            width: '100%',
        },
        // value,
        options,
        onChange: (newValue) => {
            setValue(newValue);
        },
        placeholder: 'Select Item...',
        maxTagCount: 'responsive',
    };
    const selectProps2 = {
        mode: 'multiple',
        style: {
            width: '100%',
        },
        // value,
        // options,
        onChange: (newValue) => {
            setValue(newValue);
        },
        placeholder: 'Select Item...',
        maxTagCount: 'responsive',
    };
    return (
        <>

            <div>
                <Select {...selectProps} >
                </Select>
                <Select {...selectProps2} >
                    <OptGroup label="Manager">
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                    </OptGroup>
                    <OptGroup label="Engineer">
                        <Option value="Yiminghe">yiminghe</Option>
                    </OptGroup>
                </Select>
            </div>
        </>

    )
}

export default ToInput
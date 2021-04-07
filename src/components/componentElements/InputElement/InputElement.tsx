import {Input, Space} from 'antd';
import {AudioOutlined, SearchOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css'

import styles from './InputElement.module.scss'

const {Search} = Input;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);

interface Props {
    placeholder: string;
}

const onSearch = () => console.log();

const InputElement: React.FC<Props> = ({placeholder}) => {

    return (
        <div className={styles.inputElementWrapper}>
            <div className={styles.searchIcon}><SearchOutlined /></div>
            <div className={styles.inputElement}><Input placeholder={placeholder} bordered={false}/></div>
        </div>
    )
}

export default InputElement;
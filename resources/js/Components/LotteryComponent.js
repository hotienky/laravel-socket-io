import React from "react";

import { Link } from "@inertiajs/inertia-react";
import Button from '@/Components/Button';


class LotteryComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    componentDidMount() {
        // this.setState({ messages: this.props.lotteryData.messages });
        this.messagesEndRef = React.createRef(null);
        window.Echo.private(`lottery.${this.props?.auth?.user?.id}`).listen('LotterySent', (data) => {
            console.log("LotterySent", data);
            this.setState({
                data
            })
        });

    }

    componentWillUnmount() {
        window.Echo.leave(`lottery.${this.props?.auth?.user?.id}`);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.messages !== this.state.messages) {
            this.scrollToBottom(
                prevState.messages !== undefined &&
                    prevState.messages.length !== 0
                    ? "smooth"
                    : "auto"
            );
        }
    }


    addMessage() {
        axios.post("/spin", {
            course: 1,
        });

    }

    scrollToBottom = (behavior = "smooth") => {
        this.messagesEndRef.current?.scrollIntoView({ behavior: behavior });
    };

    render() {
        return (
            <div className="flex items-start dark:bg-gray-800 dark:text-gray-300 text-sm md:text-base ">
                <div className="w-full">
                    <div className="w-full">
                        <div className="p-2 items-center justify-center flex">
                            <p>{this.state.data?.status ? this.state.data.gift : null}</p>
                        </div>
                        <div className="p-2 items-center justify-center flex">
                            {/* ${processing && 'opacity-25' */}
                            <button
                                onClick={this.addMessage}
                                type="button"
                                className={
                                    `inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150
                                } `
                                }>
                                Quay
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LotteryComponent;

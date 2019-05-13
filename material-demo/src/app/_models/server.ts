export class Server{
    id: string;
    name: string;
    description: string;
    cpu: CPU;
    memoryGb: number;
    network: Network;
    createTime: number;
    deployed: boolean = false;
    started: boolean = false;
    state: string;

}

export class CPU{
    count: number;
    speed: string;
    coresPerSocket: number;

}

export class Network{
    id: string;
    privateIpv4: string;
    vlanId: string;
    vlanName: string;

}
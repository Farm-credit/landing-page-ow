import { ShieldCheck, Network, Lock, Zap } from 'lucide-react';

export default function BlockchainVerification() {
    const features = [
        {
            icon: <Lock className="w-5 h-5 text-primary" />,
            title: "Immutable Records",
            description: "Every transaction is permanently recorded and cannot be altered.",
        },
        {
            icon: <ShieldCheck className="w-5 h-5 text-primary" />,
            title: "Enhanced Security",
            description: "Cryptographic protection ensures your data is safe from tampering.",
        },
        {
            icon: <Network className="w-5 h-5 text-primary" />,
            title: "Full Transparency",
            description: "Real-time visibility into all agricultural financial operations.",
        },
        {
            icon: <Zap className="w-5 h-5 text-primary" />,
            title: "Instant Verification",
            description: "Automated smart contracts verify transactions without intermediaries.",
        }
    ];

    return (
        <section className="w-full py-16 px-4 md:px-8 bg-background border-y border-border">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* Left Side: Text Content */}
                <div className="flex-1 space-y-8 w-full">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                            Blockchain-Based Verification
                        </h2>
                        <p className="text-xl text-primary font-medium">
                            Secure, Transparent, and Verifiable Transactions
                        </p>
                        <p className="text-muted-foreground leading-relaxed max-w-2xl">
                            FarmCredit leverages cutting-edge blockchain technology to revolutionize agricultural financing.
                            Our decentralized verification system ensures that every credit application, approval, and
                            disbursement is transparently recorded, building an unbreakable chain of trust between
                            farmers and lenders.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="flex gap-4 p-4 rounded-xl border border-border/50 bg-card/50 shadow-sm transition-all hover:shadow-md hover:border-border">
                                <div className="shrink-0 mt-1 p-2 bg-primary/10 rounded-lg h-fit">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Illustration */}
                <div className="flex-1 w-full flex justify-center lg:justify-end relative group">
                    <div className="relative w-full max-w-md aspect-square rounded-[2rem] bg-gradient-to-tr from-primary/10 via-background to-transparent overflow-hidden border border-primary/20 p-8 flex items-center justify-center shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                        {/* Decorative background elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-opacity duration-500 group-hover:opacity-75 opacity-50"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-chart-4/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 transition-opacity duration-500 group-hover:opacity-75 opacity-50"></div>

                        {/* Core blockchain illustration */}
                        <div className="relative z-10 w-full h-full flex items-center justify-center">
                            <div className="absolute inset-0 flex items-center justify-center animate-[spin_40s_linear_infinite]">
                                {/* Hexagon shapes representing blocks */}
                                <svg className="w-full h-full text-primary/30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                                    {/* Outer Hexagon */}
                                    <polygon points="50,5 89,27.5 89,72.5 50,95 11,72.5 11,27.5" fill="none" className="animate-[pulse_4s_ease-in-out_infinite]" />
                                    {/* Connections */}
                                    <line x1="50" y1="5" x2="50" y2="25" />
                                    <line x1="89" y1="27.5" x2="72.5" y2="37.5" />
                                    <line x1="89" y1="72.5" x2="72.5" y2="62.5" />
                                    <line x1="50" y1="95" x2="50" y2="75" />
                                    <line x1="11" y1="72.5" x2="27.5" y2="62.5" />
                                    <line x1="11" y1="27.5" x2="27.5" y2="37.5" />
                                </svg>
                            </div>

                            {/* Center Node */}
                            <div className="relative z-20 flex flex-col items-center justify-center space-y-3">
                                <div className="p-6 bg-background shadow-2xl rounded-2xl border border-primary/30 flex items-center justify-center animate-[pulse_3s_ease-in-out_infinite] relative">
                                    <div className="absolute inset-0 rounded-2xl bg-primary/5 animate-ping opacity-75"></div>
                                    <ShieldCheck className="w-12 h-12 text-primary relative z-10" strokeWidth={1.5} />
                                </div>

                                {/* Animated dots representing transactions */}
                                <div className="flex space-x-2 mt-4">
                                    <div className="w-2.5 h-2.5 rounded-full bg-primary/80 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-primary/80 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-primary/80 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                </div>
                            </div>

                            {/* Orbital Nodes */}
                            <div className="absolute top-[15%] left-[15%] p-3 bg-background/80 backdrop-blur-sm shadow-lg rounded-xl border border-border/50 animate-[pulse_4s_ease-in-out_infinite]" style={{ animationDelay: '1s' }}>
                                <Lock className="w-5 h-5 text-chart-4" />
                            </div>
                            <div className="absolute bottom-[15%] right-[15%] p-3 bg-background/80 backdrop-blur-sm shadow-lg rounded-xl border border-border/50 animate-[pulse_4s_ease-in-out_infinite]" style={{ animationDelay: '2s' }}>
                                <Network className="w-5 h-5 text-chart-2" />
                            </div>
                            <div className="absolute top-[20%] right-[10%] p-3 bg-background/80 backdrop-blur-sm shadow-lg rounded-xl border border-border/50 animate-[pulse_4s_ease-in-out_infinite]" style={{ animationDelay: '0.5s' }}>
                                <Zap className="w-5 h-5 text-chart-5" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

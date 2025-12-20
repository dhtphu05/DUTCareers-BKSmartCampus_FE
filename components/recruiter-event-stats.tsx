"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, FileText, CheckCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'

const applicationData = [
    { time: '08:00', applications: 4 },
    { time: '09:00', applications: 12 },
    { time: '10:00', applications: 25 },
    { time: '11:00', applications: 18 },
    { time: '12:00', applications: 8 },
    { time: '13:00', applications: 15 },
    { time: '14:00', applications: 30 },
]

const visitorData = [
    {
        id: 1,
        name: "Nguyễn Văn An",
        time: "14:32",
        major: "Kỹ thuật phần mềm",
        status: "Đã check-in"
    },
    {
        id: 2,
        name: "Trần Thị Bình",
        time: "14:28",
        major: "Hệ thống thông tin",
        status: "Đã nộp CV"
    },
    {
        id: 3,
        name: "Lê Hoàng Cường",
        time: "14:15",
        major: "Khoa học máy tính",
        status: "Đã check-in"
    },
    {
        id: 4,
        name: "Phạm Minh Duy",
        time: "14:10",
        major: "Kỹ thuật máy tính",
        status: "Phỏng vấn nhanh"
    }
]

export function RecruiterEventStats() {
    return (
        <div className="space-y-6">
            {/* Real-time Counters */}
            <div className="grid gap-6 md:grid-cols-3">
                <Card className="border-l-4 border-l-blue-600 shadow-sm">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-slate-500">Tổng Check-in tại Booth</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-3xl font-bold text-slate-900">142</span>
                                <p className="text-xs text-green-600 flex items-center mt-1">
                                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></span>
                                    +12 trong 1 giờ qua
                                </p>
                            </div>
                            <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <Users className="h-6 w-6 text-blue-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-500 shadow-sm">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-slate-500">CV Nhận được</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-3xl font-bold text-slate-900">85</span>
                                <p className="text-xs text-slate-500 mt-1">Tỷ lệ chuyển đổi: 60%</p>
                            </div>
                            <div className="h-10 w-10 bg-orange-100 rounded-lg flex items-center justify-center">
                                <FileText className="h-6 w-6 text-orange-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500 shadow-sm">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-slate-500">Phỏng vấn nhanh</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-3xl font-bold text-slate-900">24</span>
                                <p className="text-xs text-slate-500 mt-1">Đang chờ: 3 ứng viên</p>
                            </div>
                            <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
                                <Clock className="h-6 w-6 text-green-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                {/* Chart Section */}
                <Card className="shadow-sm">
                    <CardHeader>
                        <CardTitle>Xu hướng Nộp hồ sơ theo giờ</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={applicationData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="time" axisLine={false} tickLine={false} />
                                    <YAxis axisLine={false} tickLine={false} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                                        cursor={{ fill: 'transparent' }}
                                    />
                                    <Bar dataKey="applications" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Recent Visitors */}
                <Card className="shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>Check-in Mới nhất</CardTitle>
                        <Button variant="outline" size="sm">Xem tất cả</Button>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {visitorData.map((visitor) => (
                                <div key={visitor.id} className="flex items-center justify-between border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold border border-slate-200">
                                            {visitor.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900">{visitor.name}</p>
                                            <p className="text-xs text-slate-500">{visitor.major}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <Badge variant={visitor.status === 'Đã nộp CV' ? 'default' : 'secondary'}
                                            className={visitor.status === 'Đã nộp CV' ? 'bg-blue-600 hover:bg-blue-700' : ''}>
                                            {visitor.status}
                                        </Badge>
                                        <p className="text-xs text-slate-400 mt-1">{visitor.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

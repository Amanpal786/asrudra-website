import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table, TableBody, TableCell,
  TableHead, TableHeader, TableRow
} from '@/components/ui/table';
import { LogOut, Building, TrendingUp, Eye, Plus } from 'lucide-react';

const EmployeeDashboard = () => {

  const navigate = useNavigate();
  const [employeeId, setEmployeeId] = useState('');

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('employeeAuth');
    const storedEmployeeId = localStorage.getItem('employeeId');

    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    if (storedEmployeeId) {
      setEmployeeId(storedEmployeeId);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('employeeAuth');
    localStorage.removeItem('employeeId');
    navigate('/login');
  };

  // 🔥 MOCK DATA
  const myProperties = [
    {
      id: 1,
      title: 'Sky Garden Residency',
      location: 'Banjara Hills',
      price: '₹85 Lakhs',
      type: 'Residential',
      status: 'Active',
      views: 145,
      inquiries: 12
    }
  ];

  const soldProperties = [
    {
      id: 4,
      title: 'Metro Heights',
      location: 'Jubilee Hills',
      price: '₹95 Lakhs',
      type: 'Residential',
      soldDate: '2024-01-15',
      commission: '₹2.85 Lakhs'
    }
  ];

  const stats = {
    totalProperties: myProperties.length,
    totalSold: soldProperties.length,
    totalCommission: '₹4.65 Lakhs',
    totalViews: myProperties.reduce((sum, p) => sum + p.views, 0)
  };

  return (
    <Layout>

      <section className="py-6 sm:py-10 bg-background min-h-screen">

        <div className="container mx-auto px-4">

          {/* 🔥 HEADER */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">

            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">
                Employee Dashboard
              </h1>
              <p className="text-sm text-gray-500">
                Welcome back, {employeeId}
              </p>
            </div>

            <Button
              onClick={handleLogout}
              variant="outline"
              className="w-full sm:w-auto"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>

          </div>

          {/* 🔥 STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

            <Card>
              <CardContent className="p-4 flex justify-between">
                <div>
                  <p className="text-sm text-gray-500">Active Properties</p>
                  <h3 className="text-xl font-bold">{stats.totalProperties}</h3>
                </div>
                <Building />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex justify-between">
                <div>
                  <p className="text-sm text-gray-500">Sold</p>
                  <h3 className="text-xl font-bold">{stats.totalSold}</h3>
                </div>
                <TrendingUp />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex justify-between">
                <div>
                  <p className="text-sm text-gray-500">Commission</p>
                  <h3 className="text-xl font-bold">{stats.totalCommission}</h3>
                </div>
                <TrendingUp />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex justify-between">
                <div>
                  <p className="text-sm text-gray-500">Views</p>
                  <h3 className="text-xl font-bold">{stats.totalViews}</h3>
                </div>
                <Eye />
              </CardContent>
            </Card>

          </div>

          {/* 🔥 MY PROPERTIES */}
          <Card className="mb-6">
            <CardHeader className="flex flex-col sm:flex-row justify-between gap-3">
              <CardTitle>My Properties</CardTitle>

              <Button className="w-full sm:w-auto">
                <Plus className="w-4 h-4 mr-2" />
                Add Property
              </Button>
            </CardHeader>

            <CardContent className="overflow-x-auto">
              <Table className="min-w-[700px]">
                <TableHeader>
                  <TableRow>
                    <TableHead>Property</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {myProperties.map((p) => (
                    <TableRow key={p.id}>
                      <TableCell>{p.title}</TableCell>
                      <TableCell>{p.location}</TableCell>
                      <TableCell>{p.price}</TableCell>
                      <TableCell>
                        <Badge>{p.status}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>

              </Table>
            </CardContent>
          </Card>

          {/* 🔥 SOLD */}
          <Card>
            <CardHeader>
              <CardTitle>Sold Properties</CardTitle>
            </CardHeader>

            <CardContent className="overflow-x-auto">
              <Table className="min-w-[700px]">
                <TableHeader>
                  <TableRow>
                    <TableHead>Property</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Commission</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {soldProperties.map((p) => (
                    <TableRow key={p.id}>
                      <TableCell>{p.title}</TableCell>
                      <TableCell>{p.location}</TableCell>
                      <TableCell>{p.price}</TableCell>
                      <TableCell className="text-green-600 font-semibold">
                        {p.commission}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>

              </Table>
            </CardContent>
          </Card>

        </div>
      </section>

    </Layout>
  );
};

export default EmployeeDashboard;
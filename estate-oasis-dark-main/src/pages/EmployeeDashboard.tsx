
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
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

  // Mock data for demonstration
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
    },
    {
      id: 2,
      title: 'Tech Hub Office Complex',
      location: 'HITEC City',
      price: '₹45 Lakhs',
      type: 'Office',
      status: 'Active',
      views: 89,
      inquiries: 8
    },
    {
      id: 3,
      title: 'Green Valley Plot',
      location: 'Shamshabad',
      price: '₹25 Lakhs',
      type: 'Plot',
      status: 'Under Review',
      views: 67,
      inquiries: 5
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
    },
    {
      id: 5,
      title: 'Business Center Plaza',
      location: 'Banjara Hills',
      price: '₹60 Lakhs',
      type: 'Office',
      soldDate: '2024-02-20',
      commission: '₹1.80 Lakhs'
    }
  ];

  const stats = {
    totalProperties: myProperties.length,
    totalSold: soldProperties.length,
    totalCommission: '₹4.65 Lakhs',
    totalViews: myProperties.reduce((sum, prop) => sum + prop.views, 0)
  };

  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-background via-background/95 to-card/50 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                Employee Dashboard
              </h1>
              <p className="text-muted-foreground">Welcome back, {employeeId}</p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="glass-effect">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">Active Properties</p>
                    <h3 className="text-2xl font-bold text-foreground">{stats.totalProperties}</h3>
                  </div>
                  <Building className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">Properties Sold</p>
                    <h3 className="text-2xl font-bold text-foreground">{stats.totalSold}</h3>
                  </div>
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">Total Commission</p>
                    <h3 className="text-2xl font-bold text-foreground">{stats.totalCommission}</h3>
                  </div>
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">Total Views</p>
                    <h3 className="text-2xl font-bold text-foreground">{stats.totalViews}</h3>
                  </div>
                  <Eye className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* My Properties */}
          <Card className="glass-effect mb-8">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-foreground">My Properties</CardTitle>
              <Button className="gradient-primary text-primary-foreground">
                <Plus className="w-4 h-4 mr-2" />
                Add Property
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Property</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Views</TableHead>
                    <TableHead>Inquiries</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {myProperties.map((property) => (
                    <TableRow key={property.id}>
                      <TableCell className="font-medium">{property.title}</TableCell>
                      <TableCell>{property.location}</TableCell>
                      <TableCell>{property.price}</TableCell>
                      <TableCell>{property.type}</TableCell>
                      <TableCell>
                        <Badge variant={property.status === 'Active' ? 'default' : 'secondary'}>
                          {property.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{property.views}</TableCell>
                      <TableCell>{property.inquiries}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Sold Properties */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="text-foreground">Sold Properties</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Property</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Sold Date</TableHead>
                    <TableHead>Commission</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {soldProperties.map((property) => (
                    <TableRow key={property.id}>
                      <TableCell className="font-medium">{property.title}</TableCell>
                      <TableCell>{property.location}</TableCell>
                      <TableCell>{property.price}</TableCell>
                      <TableCell>{property.type}</TableCell>
                      <TableCell>{property.soldDate}</TableCell>
                      <TableCell className="text-primary font-medium">{property.commission}</TableCell>
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
